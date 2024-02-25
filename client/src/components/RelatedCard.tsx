import { Chip, Divider } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'

const RelatedCard = ({ data }:any) => {
    console.log("This" ,data)
  return (
    <div className='bg-white rounded-md p-5 mx-5 mb-3 min-h-[440px]'>
        <Chip className='mb-3 bg-[#00a5e6] text-white'>{data.date}</Chip>
        <h1 className='text-xl text-black font-semibold'>{data.title}</h1>
        <Divider className='my-5' />
        <p className='text-lg font-semibold'>A. Imamović, Šaban Žuna, Ensar Mulaosmanović, Zijad Alibašić, B. Kosec</p>
        <p className='text-lg line-clamp-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, praesentium quaerat quam quis vero, vitae laborum veniam distinctio laboriosam magnam quo facilis dolore accusamus at. Quas odit vero fugit iusto quis omnis, asperiores sed porro ab vel illum! Dolorem corporis quam quasi aliquid doloribus placeat, magni iure sed sequi ea.</p>
        <div className='w-full mt-5 justify-end font-semibold text-[#00a5e6]'>
            <Link href={`/publication/${214}`}>
                Vidi više {`>`}
            </Link>
        </div>
    </div>
  )
}

export default RelatedCard