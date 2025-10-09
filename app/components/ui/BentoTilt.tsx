import { useRef, useState } from "react"

const BentoTilt = ({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) => {
  const [transformStyle, setTransformStyle] = useState("")
  const itemRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!itemRef.current) return

    const { left, top, width, height } = itemRef.current.getBoundingClientRect()

    const relativeX = (e.clientX - left) / width
    const relativeY = (e.clientY - top) / height

    const tiltX = (relativeY - 0.5) * 5
    const tiltY = (relativeX - 0.5) * -5

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`
    setTransformStyle(newTransform)
  }

  const handleMouseLeave = () => {
    setTransformStyle("")
  }

  return (
    <div
      ref={itemRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
      className={className}
    >
      {children}
    </div>
  )
}
export default BentoTilt
