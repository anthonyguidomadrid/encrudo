import { BreadcrumbJsonLd } from 'next-seo'
import Link from 'next/link'
import React from 'react'

export type BreadcrumbItem = {
  label: string
  href: string
}

export type BreadcrumbsProps = {
  items: BreadcrumbItem[]
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <>
      <BreadcrumbJsonLd
        items={items.map((item) => ({
          name: item.label,
          item: `${process.env.NEXT_PUBLIC_SITE_URL || ''}${item.href}`
        }))}
      />
      <nav aria-label="Breadcrumb" className="mb-4 mt-8">
        <ol
          className="flex flex-wrap gap-2 text-sm"
          itemScope
          itemType="https://schema.org/BreadcrumbList"
        >
          {items.map((item, idx) => {
            const isLast = idx === items.length - 1
            return (
              <li
                key={item.href}
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
                className="flex items-center"
              >
                {idx > 0 && <span className="mx-2">/</span>}
                <Link
                  href={item.href}
                  itemProp="item"
                  className={isLast ? 'no-underline' : ''}
                >
                  <span itemProp="name" className="hover:text-primary">
                    {item.label}
                  </span>
                </Link>
                <meta itemProp="position" content={String(idx + 1)} />
              </li>
            )
          })}
        </ol>
      </nav>
    </>
  )
}
