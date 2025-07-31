"use client"

import type * as React from "react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

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

export const AccordionSubtleShadow = ({ children, className }: AccordionProps) => {
  return <div className={cn("space-y-3", className)}>{children}</div>
}

export const AccordionSubtleShadowItem = ({ children, className }: AccordionItemProps) => {
  return (
    <div
      className={cn(
        "border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden bg-card shadow-lg", // Softer shadow
        className,
      )}
    >
      {children}
    </div>
  )
}

export const AccordionSubtleShadowTrigger = ({ children, className, onClick, isOpen }: AccordionTriggerProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center justify-between w-full px-6 py-4 font-semibold text-left text-foreground bg-transparent hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200 outline-none",
        className,
      )}
    >
      <span className="text-base">{children}</span>
      <motion.div
        animate={{
          rotate: isOpen ? 180 : 0,
          scale: isOpen ? 1.1 : 1,
        }}
        transition={{
          duration: 0.3,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="ml-4 flex-shrink-0"
      >
        <ChevronDown className="h-5 w-5 text-muted-foreground" />
      </motion.div>
    </button>
  )
}

export const AccordionSubtleShadowContent = ({ children, className, isOpen }: AccordionContentProps) => {
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
          className="overflow-hidden border-t border-gray-200 dark:border-gray-700"
        >
          <div className={cn("px-6 py-4 text-sm text-muted-foreground leading-relaxed", className)}>{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
