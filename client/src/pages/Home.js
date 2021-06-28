import React from "react"
import { Layout } from "../components/Layout"
import { Explainer } from "../components/Explainer"
import { Products } from "../components/Products"

function Home() {
  return (
    <Layout>
      <Products />
      <Explainer />
    </Layout>
  )
}

export default Home
