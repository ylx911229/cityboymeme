'use client'

import { useEffect, useRef, forwardRef, useImperativeHandle } from 'react'
import { fabric } from 'fabric'

export interface TextElement {
  id: string
  text: string
  color: string
  font: string
  style: 'bold' | 'filled' | 'outlined'
  size: number
}

export interface FabricCanvasRef {
  addText: (element: TextElement) => void
  updateText: (id: string, updates: Partial<TextElement>) => void
  removeText: (id: string) => void
  exportAsDataURL: () => string
  getActiveTextId: () => string | null
  setActiveTextId: (id: string | null) => void
}

interface FabricCanvasProps {
  backgroundImage?: string
  width?: number
  height?: number
  onTextSelect?: (id: string | null) => void
  onTextModified?: (id: string, properties: any) => void
  onCanvasReady?: () => void
}

const FabricCanvas = forwardRef<FabricCanvasRef, FabricCanvasProps>(
  ({ backgroundImage, width = 600, height = 600, onTextSelect, onTextModified, onCanvasReady }, ref) => {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const fabricCanvasRef = useRef<fabric.Canvas | null>(null)
    const textObjectsRef = useRef<Map<string, fabric.Text>>(new Map())

    useEffect(() => {
      if (!canvasRef.current || !containerRef.current) return

      // Calculate canvas size based on container
      const containerWidth = containerRef.current.clientWidth
      const canvasSize = Math.min(containerWidth, width, height)

      const canvas = new fabric.Canvas(canvasRef.current, {
        width: canvasSize,
        height: canvasSize,
        backgroundColor: '#f3f4f6',
        preserveObjectStacking: true,
      })

      fabricCanvasRef.current = canvas

      // Load background image if provided
      if (backgroundImage) {
        fabric.Image.fromURL(backgroundImage, (img) => {
          // Check if canvas still exists (component might have unmounted)
          if (!img || !fabricCanvasRef.current) return

          const canvas = fabricCanvasRef.current

          // Calculate scale to cover the entire canvas (like CSS object-fit: cover)
          const scaleX = canvasSize / (img.width || 1)
          const scaleY = canvasSize / (img.height || 1)
          const scale = Math.max(scaleX, scaleY)

          img.set({
            scaleX: scale,
            scaleY: scale,
            left: canvasSize / 2,
            top: canvasSize / 2,
            originX: 'center',
            originY: 'center',
            selectable: false,
            evented: false,
          })

          canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas))
        }, { crossOrigin: 'anonymous' })
      }

      // Handle text selection
      canvas.on('selection:created', (e) => {
        const activeObject = e.selected?.[0]
        if (activeObject && activeObject.data?.id) {
          onTextSelect?.(activeObject.data.id)
        }
      })

      canvas.on('selection:updated', (e) => {
        const activeObject = e.selected?.[0]
        if (activeObject && activeObject.data?.id) {
          onTextSelect?.(activeObject.data.id)
        }
      })

      canvas.on('selection:cleared', () => {
        onTextSelect?.(null)
      })

      // Handle text modification
      canvas.on('object:modified', (e) => {
        const obj = e.target as fabric.Text
        if (obj && obj.data?.id) {
          onTextModified?.(obj.data.id, {
            left: obj.left,
            top: obj.top,
            scaleX: obj.scaleX,
            scaleY: obj.scaleY,
            angle: obj.angle,
          })
        }
      })

      return () => {
        canvas.dispose()
      }
    }, [width, height, backgroundImage, onTextSelect, onTextModified])

    // Notify parent when canvas is ready
    useEffect(() => {
      if (fabricCanvasRef.current) {
        onCanvasReady?.()
      }
    }, [onCanvasReady])

    const getTextStyle = (element: TextElement) => {
      const baseStyle = {
        fontFamily: element.font,
        fontSize: element.size,
        fill: element.color,
        fontWeight: element.style === 'bold' ? 900 : 800,
        textAlign: 'center' as const,
        originX: 'center' as const,
        originY: 'center' as const,
      }

      if (element.style === 'outlined') {
        return {
          ...baseStyle,
          stroke: '#000000',
          strokeWidth: 3,
        }
      }

      if (element.style === 'filled') {
        return {
          ...baseStyle,
          backgroundColor: 'rgba(0,0,0,0.75)',
          padding: 15,
        }
      }

      return baseStyle
    }

    useImperativeHandle(ref, () => ({
      addText: (element: TextElement) => {
        const canvas = fabricCanvasRef.current
        if (!canvas) return

        const style = getTextStyle(element)
        const text = new fabric.Text(element.text.toUpperCase(), {
          ...style,
          left: canvas.width! / 2,
          top: canvas.height! / 2,
          data: { id: element.id, element }, // Store full element data
        })

        textObjectsRef.current.set(element.id, text)
        canvas.add(text)
        canvas.setActiveObject(text)
        canvas.renderAll()
      },

      updateText: (id: string, updates: Partial<TextElement>) => {
        const canvas = fabricCanvasRef.current
        const textObj = textObjectsRef.current.get(id)
        if (!canvas || !textObj) return

        // Save current transform properties
        const currentTransform = {
          left: textObj.left,
          top: textObj.top,
          scaleX: textObj.scaleX,
          scaleY: textObj.scaleY,
          angle: textObj.angle,
        }

        // Update stored element data
        const currentElement = textObj.data?.element || {}
        const updatedElement = { ...currentElement, ...updates }
        textObj.data = { ...textObj.data, element: updatedElement }

        if (updates.text !== undefined) {
          textObj.set('text', updates.text.toUpperCase())
        }

        if (updates.color !== undefined) {
          textObj.set('fill', updates.color)
        }

        if (updates.font !== undefined) {
          textObj.set('fontFamily', updates.font)
        }

        if (updates.size !== undefined) {
          textObj.set('fontSize', updates.size)
        }

        if (updates.style !== undefined) {
          // Clear all style-related properties first
          textObj.set({
            stroke: undefined,
            strokeWidth: 0,
            backgroundColor: '',
            padding: 0,
          })

          const style = getTextStyle(updatedElement as TextElement)

          // Only update style-related properties, not transform properties
          const { originX, originY, ...styleOnly } = style
          textObj.set(styleOnly)
        }

        // Restore transform properties to prevent position reset
        textObj.set(currentTransform)

        canvas.renderAll()
      },

      removeText: (id: string) => {
        const canvas = fabricCanvasRef.current
        const textObj = textObjectsRef.current.get(id)
        if (!canvas || !textObj) return

        canvas.remove(textObj)
        textObjectsRef.current.delete(id)
        canvas.renderAll()
      },

      exportAsDataURL: () => {
        const canvas = fabricCanvasRef.current
        if (!canvas) return ''

        canvas.discardActiveObject()
        canvas.renderAll()
        return canvas.toDataURL({
          format: 'png',
          quality: 1,
          multiplier: 2,
        })
      },

      getActiveTextId: () => {
        const canvas = fabricCanvasRef.current
        if (!canvas) return null

        const activeObject = canvas.getActiveObject()
        return activeObject?.data?.id || null
      },

      setActiveTextId: (id: string | null) => {
        const canvas = fabricCanvasRef.current
        if (!canvas) return

        if (id === null) {
          canvas.discardActiveObject()
          canvas.renderAll()
          return
        }

        const textObj = textObjectsRef.current.get(id)
        if (textObj) {
          canvas.setActiveObject(textObj)
          canvas.renderAll()
        }
      },
    }))

    return (
      <div ref={containerRef} className="relative w-full aspect-square bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center">
        <canvas ref={canvasRef} style={{ maxWidth: '100%', maxHeight: '100%' }} />
      </div>
    )
  }
)

FabricCanvas.displayName = 'FabricCanvas'

export default FabricCanvas
