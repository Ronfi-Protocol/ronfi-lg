import React, { ReactNode } from 'react'
import { Link } from 'react-router-dom'

import Container from 'components/Layouts/Container'
import { Box, Flex, Type } from 'theme/base'

export type BreadcrumbItem = {
  title: ReactNode
  path?: string
}

const renderBreadcrumbItem = (item: BreadcrumbItem) =>
  item.path ? (
    <Link to={item.path}>
      <Type.Body2 color="neutral4">{item.title}</Type.Body2>
    </Link>
  ) : (
    <Type.Body2>
      <b>{item.title}</b>
    </Type.Body2>
  )

const Breadcrumb = ({ items }: { items?: BreadcrumbItem[] }) => {
  return (
    <Box pt={40} pb={16}>
      <Container>
        {items?.length === 1 ? (
          <Type.H4 textAlign="center">{items?.[0]?.title}</Type.H4>
        ) : (
          <Flex justifyContent="space-between">
            <Flex alignItems="center">
              {items?.map((item, index) => {
                if (index === items.length - 1) {
                  return <div key={index}>{renderBreadcrumbItem(item)}</div>
                }
                return (
                  <Flex key={index} color="neutral3">
                    {renderBreadcrumbItem(item)}
                    <Type.Body2 mx={3}>/</Type.Body2>
                  </Flex>
                )
              })}
            </Flex>
          </Flex>
        )}
      </Container>
    </Box>
  )
}

export default Breadcrumb
