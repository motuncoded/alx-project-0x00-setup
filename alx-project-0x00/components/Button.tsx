import React from 'react'
import { ButtonProps } from "@/interfaces";


export const Button: React.FC<ButtonProps> = ({title, styles}) => {
  return (
    <div style={styles}>{title}</div>
  )
}
