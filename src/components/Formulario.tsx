import { useState } from 'react';


export const Formulario = () => {

  const [input, setInput] = useState<string>("")
  const [visible, setVisible] = useState<boolean>(true)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(`Valor del input es: ${input}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        name='nombre'
        onChange={handleInputChange}
        placeholder='...escribe algo'
      />
      <button type='submit'>Enviar</button>
    </form>
  )
}
