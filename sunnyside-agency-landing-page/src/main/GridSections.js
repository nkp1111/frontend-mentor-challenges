import React from 'react'
import EggImage from './gridSectionArticles/EggImage'
import GlassImage from './gridSectionArticles/GlassImage'
import Info1Article from './gridSectionArticles/Info1Article'
import Info2Article from './gridSectionArticles/Info2Article'
import GraphicDesign from './gridSectionArticles/GraphicDesignArticle'
import PhotoArticle from './gridSectionArticles/PhotoArticle'

function GridSections() {
  return (
    <section id="grid-section" className='container-fluid'>
      <h2 className='hidden-heading'>Grid section</h2>
      <div className='row article-set-1'>
        <Info1Article />
        <EggImage />
      </div>
      <div className='row article-set-2'>
        <GlassImage />
        <Info2Article />
      </div>
      <div className='row article-set-3'>
        <GraphicDesign />
        <PhotoArticle />
      </div>
    </section>
  )
}

export default GridSections
