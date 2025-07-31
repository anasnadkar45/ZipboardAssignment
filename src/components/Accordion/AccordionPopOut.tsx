"use client"

import type * as React from "react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronUp } from "lucide-react" // Using ChevronUp for the default icon

interface AccordionProps {
  children: React.ReactNode
  className?: string
}

interface AccordionItemProps {
  children: React.ReactNode
  className?: string
}

interface AccordionTriggerProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  isOpen: boolean
}

interface AccordionContentProps {
  children: React.ReactNode
  className?: string
  isOpen: boolean
}

export const AccordionPopOut = ({ children, className }: AccordionProps) => {
  return <div className={cn("space-y-0", className)}>{children}</div>
}

export const AccordionPopOutItem = ({ children, className }: AccordionItemProps) => {
  return (
    <div
      className={cn(
        "border-2 border-black rounded-lg overflow-hidden bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(1,1,1,20)]", // Pop-out shadow
        className,
      )}
    >
      {children}
    </div>
  )
}

export const AccordionPopOutTrigger = ({ children, className, onClick, isOpen }: AccordionTriggerProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center justify-between w-full px-6 py-4 font-bold text-left hover:cursor-pointer text-black bg-[#A7C7FF] hover:bg-[#90B0E0] transition-colors duration-200 outline-none", // Blue header from image
        className,
      )}
    >
      <span className="text-lg font-bold md:text-2xl md:font-extrabold">{children}</span>
      <motion.div
        animate={{
          rotate: isOpen ? 0 : 180, // Rotate from up to down
          scale: isOpen ? 1 : 1.1,
        }}
        transition={{
          duration: 0.3,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="ml-4 flex-shrink-0"
      >
        <ChevronUp className="h-5 w-5 text-black" /> {/* Upward caret */}
      </motion.div>
    </button>
  )
}

export const AccordionPopOutContent = ({ children, className, isOpen }: AccordionContentProps) => {
  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{
            height: 0,
            opacity: 0,
            y: -10,
          }}
          animate={{
            height: "auto",
            opacity: 1,
            y: 0,
          }}
          exit={{
            height: 0,
            opacity: 0,
            y: -10,
          }}
          transition={{
            duration: 0.4,
            ease: [0.4, 0.0, 0.2, 1],
            opacity: { duration: 0.25 },
            y: { duration: 0.3 },
          }}
          className="overflow-hidden border-t-2 border-black bg-white" // Border between header and content
        >
          <div className={cn("px-6 py-4 text-sm text-black leading-relaxed", className)}>{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
