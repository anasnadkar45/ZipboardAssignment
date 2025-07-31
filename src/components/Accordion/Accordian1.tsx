"use client"

import * as React from "react"
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

export const Accordion = ({ children, className }: AccordionProps) => {
  return <div className={cn("space-y-3", className)}>{children}</div>
}

export const AccordionItem = ({ children, className }: AccordionItemProps) => {
  return (
    <div
      className={cn(
        "border-t border-b text-lg font-bold border-border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200",
        className,
      )}
    >
      {children}
    </div>
  )
}

export const AccordionTrigger = ({ children, className, onClick, isOpen }: AccordionTriggerProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center justify-between font-bold w-full px-6 py-4 text-left text-foreground bg-transparent hover:cursor-pointer hover:bg-muted/50 transition-colors duration-200 focus:outline-none",
        className,
      )}
    >
      <span className="text-lg font-bold md:text-2xl md:font-extrabold">{children}</span>
      <motion.div
        animate={{
          rotate: isOpen ? 180 : 0,
          scale: isOpen ? 1.1 : 1,
        }}
        transition={{
          duration: 0.3,
          ease: [0.4, 0.0, 0.2, 1], // Custom cubic-bezier for smooth easing
        }}
        className="ml-4 flex-shrink-0"
      >
        <ChevronDown className="h-5 w-5 text-muted-foreground" />
      </motion.div>
    </button>
  )
}

export const AccordionContent = ({ children, className, isOpen }: AccordionContentProps) => {
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
            ease: [0.4, 0.0, 0.2, 1], // Smooth cubic-bezier easing
            opacity: { duration: 0.25 },
            y: { duration: 0.3 },
          }}
          className="overflow-hidden"
        >
          <div className={cn("px-6 py-4 text-sm text-muted-foreground leading-relaxed", className)}>{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Simple Accordion component for common use
interface AccordionSimpleItem {
  title: string
  content: string | React.ReactNode
}

interface AccordionSimpleProps {
  items: AccordionSimpleItem[]
  className?: string
}

export const AccordionSimple = ({ items, className }: AccordionSimpleProps) => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null)

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <Accordion className={className}>
      {items.map((item, idx) => {
        const isOpen = openIndex === idx
        return (
          <AccordionItem key={idx}>
            <AccordionTrigger onClick={() => toggleItem(idx)} isOpen={isOpen}>
              {item.title}
            </AccordionTrigger>
            <AccordionContent isOpen={isOpen}>{item.content}</AccordionContent>
          </AccordionItem>
        )
      })}
    </Accordion>
  )
}
