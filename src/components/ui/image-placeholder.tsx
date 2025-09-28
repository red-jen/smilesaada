import { cn } from "@/lib/utils"
import { ImageIcon, Play, Eye } from "lucide-react"

interface ImagePlaceholderProps {
  width?: number
  height?: number
  className?: string
  fallback?: React.ReactNode
  src?: string
  alt?: string
  aspectRatio?: "square" | "video" | "portrait" | "landscape"
  overlay?: "none" | "gradient" | "dark" | "light"
  interactive?: boolean
  badge?: string
  type?: "image" | "video" | "before-after"
}

export function ImagePlaceholder({ 
  width = 200, 
  height = 200, 
  className = "",
  fallback,
  src,
  alt = "Image placeholder",
  aspectRatio,
  overlay = "none",
  interactive = false,
  badge,
  type = "image"
}: ImagePlaceholderProps) {
  const aspectClasses = {
    square: "aspect-square",
    video: "aspect-video", 
    portrait: "aspect-[3/4]",
    landscape: "aspect-[4/3]"
  }

  const overlayClasses = {
    none: "",
    gradient: "bg-gradient-to-t from-black/60 via-transparent to-transparent",
    dark: "bg-black/40",
    light: "bg-white/20"
  }

  const getTypeIcon = () => {
    switch (type) {
      case "video":
        return <Play className="w-12 h-12 text-white drop-shadow-lg" />
      case "before-after":
        return <Eye className="w-8 h-8 text-white drop-shadow-lg" />
      default:
        return <ImageIcon className="w-8 h-8 opacity-60" />
    }
  }

  // If src is provided, render actual image with fallback
  if (src) {
    return (
      <div className={cn(
        "relative overflow-hidden rounded-xl group",
        aspectRatio && aspectClasses[aspectRatio], 
        interactive && "cursor-pointer image-overlay",
        className
      )}>
        <img 
          src={src} 
          alt={alt}
          className={cn(
            "w-full h-full object-cover transition-transform duration-500",
            interactive && "group-hover:scale-105"
          )}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            const placeholder = target.nextElementSibling?.nextElementSibling as HTMLElement;
            if (placeholder) placeholder.style.display = 'flex';
          }}
        />
        
        {/* Overlay */}
        {overlay !== "none" && (
          <div className={cn("absolute inset-0", overlayClasses[overlay])} />
        )}
        
        {/* Interactive content */}
        {interactive && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {getTypeIcon()}
          </div>
        )}
        
        {/* Badge */}
        {badge && (
          <div className="absolute top-3 left-3 bg-black/80 text-white px-3 py-1 rounded-full text-sm font-medium">
            {badge}
          </div>
        )}
        
        {/* Fallback placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 border border-slate-300 rounded-xl hidden items-center justify-center">
          {fallback || (
            <div className="text-center text-slate-500">
              {getTypeIcon()}
              <span className="text-sm font-medium mt-2 block">Professional Photo</span>
            </div>
          )}
        </div>
      </div>
    )
  }

  // Default placeholder with modern styling
  return (
    <div 
      className={cn(
        "relative overflow-hidden rounded-xl border border-slate-200 group",
        "bg-gradient-to-br from-slate-50 via-white to-slate-100",
        aspectRatio && aspectClasses[aspectRatio],
        interactive && "cursor-pointer hover:border-primary-300 transition-colors",
        className
      )}
      style={!aspectRatio ? { width, height } : undefined}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent)]" />
      
      {/* Main content */}
      <div className="relative h-full flex items-center justify-center p-6">
        {fallback || (
          <div className="text-center text-slate-500">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-105 transition-transform">
              {getTypeIcon()}
            </div>
            <span className="text-sm font-medium text-slate-600">Professional {type === 'video' ? 'Video' : 'Photo'}</span>
            {type === "before-after" && (
              <span className="text-xs text-slate-400 block mt-1">Before & After</span>
            )}
          </div>
        )}
      </div>
      
      {/* Badge */}
      {badge && (
        <div className="absolute top-3 left-3 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
          {badge}
        </div>
      )}
      
      {/* Hover overlay */}
      {interactive && (
        <div className="absolute inset-0 bg-primary-50/0 group-hover:bg-primary-50/20 transition-colors" />
      )}
    </div>
  )
}