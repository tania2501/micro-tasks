import React from "react";

type FooterType = {
  titleFooter: string
}

export const Footer = (props: FooterType) => {
  return (
    <div>{props.titleFooter}</div>
  )
}