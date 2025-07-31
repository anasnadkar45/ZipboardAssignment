"use client"
import { ModeToggle } from '@/components/ModeToggle'
import Image from 'next/image'
import React from 'react'
import Logo from '../../public/zipBoard.png'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/Accordion/Accordian1'
import { AccordionPopOut, AccordionPopOutContent, AccordionPopOutItem, AccordionPopOutTrigger } from '@/components/Accordion/AccordionPopOut'
import { AccordionSubtleShadow, AccordionSubtleShadowContent, AccordionSubtleShadowItem, AccordionSubtleShadowTrigger } from '@/components/Accordion/AccordionSubtleShadow'

const faqItems = [
  {
    id: 1,
    title: "Is it accessible?",
    content: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    id: 2,
    title: "How do I track my order?",
    content:
      "You'll get an email with tracking info within 24 hours of shipment. You can also track your order by logging into your account and visiting the 'My Orders' section where you'll find real-time updates.",
  },
  {
    id: 3,
    title: "Do you offer international shipping?",
    content:
      "Yes, we ship to over 50 countries worldwide. International shipping rates and delivery times vary by location. You can see the exact cost and estimated delivery time at checkout.",
  },
]
const HomePage = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null)
  const [openIndexPopOut, setOpenIndexPopOut] = React.useState<number | null>(null)
  const [openIndexSubtleShadow, setOpenIndexSubtleShadow] = React.useState<number | null>(null)
  return (
    <div className='space-y-10 h-screen'>
      <header className='w-full border-b h-20 bg-card'>
        <div className='w-7xl h-full mx-auto flex justify-between items-center '>
          <Image src={Logo} alt='Logo ZipBoard' height={150} width={150} />
          <ModeToggle />
        </div>
      </header>

      <main className='h-fit w-7xl mx-auto space-y-10 pb-10'>
        {/* 1. Figma accordion */}
        <section className='space-y-6'>
          <h1 className='text-2xl font-bold text-[#8800C8] dark:text-[#2FC1FF] text-center'>1. Accordion to Figma</h1>
          <Accordion>
            {faqItems.map((item, idx) => {
              const isOpen = openIndex === idx
              return (
                <AccordionItem key={item.id}>
                  <AccordionTrigger isOpen={isOpen} onClick={() => setOpenIndex(prev => prev === idx ? null : idx)}>
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent isOpen={isOpen}>{item.content}</AccordionContent>
                </AccordionItem>
              )
            })}
          </Accordion>
        </section>

        {/* 2. Pop-Out Accordion */}
        <section className="space-y-6">
          <h2 className='text-2xl font-bold text-[#8800C8] dark:text-[#2FC1FF] text-center'>2. Pop-Out Accordion</h2>
          <AccordionPopOut>
            {faqItems.map((item, idx) => {
              const isOpen = openIndexPopOut === idx
              return (
                <AccordionPopOutItem key={item.id}>
                  <AccordionPopOutTrigger
                    isOpen={isOpen}
                    onClick={() => setOpenIndexPopOut((prev) => (prev === idx ? null : idx))}
                  >
                    {item.title}
                  </AccordionPopOutTrigger>
                  <AccordionPopOutContent isOpen={isOpen}>{item.content}</AccordionPopOutContent>
                </AccordionPopOutItem>
              )
            })}
          </AccordionPopOut>
        </section>

        {/* 3. Subtle Shadow Accordion */}
        <section className="space-y-6">
          <h2 className='text-2xl font-bold text-[#8800C8] dark:text-[#2FC1FF] text-center'>3. Subtle Shadow Accordion</h2>
          <AccordionSubtleShadow>
            {faqItems.map((item, idx) => {
              const isOpen = openIndexSubtleShadow === idx
              return (
                <AccordionSubtleShadowItem key={item.id}>
                  <AccordionSubtleShadowTrigger
                    isOpen={isOpen}
                    onClick={() => setOpenIndexSubtleShadow((prev) => (prev === idx ? null : idx))}
                  >
                    {item.title}
                  </AccordionSubtleShadowTrigger>
                  <AccordionSubtleShadowContent isOpen={isOpen}>{item.content}</AccordionSubtleShadowContent>
                </AccordionSubtleShadowItem>
              )
            })}
          </AccordionSubtleShadow>
        </section>
      </main>
    </div>
  )
}

export default HomePage