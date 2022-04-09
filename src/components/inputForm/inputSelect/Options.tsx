import React from 'react'

export const OptionOne = () => {
  return (
    <>
        <option value="1">1 месяц</option>
        <option value="3">3 месяца</option>
        <option value="6" >6 месяцев</option>
        <option value="12">1 год</option>
        <option value="24">2 года</option>
        <option value="60">5 лет</option>
    </>
  )
}

export const OptionTwo = () => {
    return (
      <>
        <option value="1">Аннуитетный</option>
        <option value="2">Дифференцированный</option>
      </>
    )
  }
  