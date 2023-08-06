import React, { useState } from 'react'

const AddCategory = ({ onAddCategory }) => {

  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(inputValue.trim().length <= 1) return
    /* setCategories(cats => [inputValue, ...cats]) */
    onAddCategory(inputValue.trim())
    setInputValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Buscar..."
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  )
}

export default AddCategory