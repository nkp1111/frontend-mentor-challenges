import React from 'react'
import EggImage from './gridSectionArticles/EggImage'
import GlassImage from './gridSectionArticles/GlassImage'
import Info1Article from './gridSectionArticles/Info1Article'
import Info2Article from './gridSectionArticles/Info2Article'
import GraphicDesign from './gridSectionArticles/GraphicDesignArticle'
import PhotoArticle from './gridSectionArticles/PhotoArticle'

function GridSections() {
  return (
    <section>
      <h2>Grid section</h2>
      <div>
        <Info1Article />
        <EggImage />
        <GlassImage />
        <Info2Article />
        <GraphicDesign />
        <PhotoArticle />
      </div>
    </section>
  )
}

export default GridSections
