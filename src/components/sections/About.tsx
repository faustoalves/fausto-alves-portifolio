import React from 'react'
import Button from '../common/ui/button/Button'
import AboutAvatar from '../about/AboutAvatar'

type Props = {}

const About = (props: Props) => {
  return (
    <section className='w-full grid grid-cols-1 lg:grid-cols-2 relative mt-10 top-line bottom-line '>

      <div className='w-full h-full bottom-line pattern-bg lg:col-span-2 p-4 text-center relative'>
        <h2>WHO I AM</h2>
      </div>

      <AboutAvatar />
      <div className='w-full h-full flex justify-center items-start flex-col p-4 text-center lg:text-left text-lg leading-5 gap-6'>
        <p className=''>Sou um Senior Frontend Engineer com 21 anos de experiência criando interfaces precisas, rápidas e bem pensadas. Minha especialidade é transformar ideias em produtos claros, funcionais e visualmente marcantes — sempre equilibrando visão de UI/UX, engenharia e consistência.</p>
        <p className=''>Trabalhei em projetos premiados para grandes marcas e startups internacionais, sempre atuando perto do produto: entendendo o problema, refinando a experiência e entregando o que realmente faz diferença.</p>
        <p className=''>Gosto de construir coisas com autonomia, pensar em estrutura, fluxo, motion e micro‑interações.</p>
        <p className=''>Meu foco é criar interfaces que parecem simples, mas que por baixo carregam arquitetura sólida, boas decisões técnicas e atenção real aos detalhes.</p>
        <p className=''>Sou o tipo de engenheiro que conversa com design, produto e negócios, sem perder a mão no código.</p>
        <p className=''>Não “faço telas”. Construo experiência.</p>
      </div>
    </section>
  )
}

export default About