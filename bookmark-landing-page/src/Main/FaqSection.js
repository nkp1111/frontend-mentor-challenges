import React, { useEffect } from 'react'
import { faqSectionData, iconArrow, iconArrowDown } from '../assets/data'

function FaqSection() {

  useEffect(() => {
    let icons = document.querySelectorAll(".arrow-icon")
    icons.forEach(icon => {
      icon.addEventListener("click", (e) => {
        let img = icon.firstChild
        console.log(img.alt)
        if (img.alt === "icon arrow") {
          img.alt = "icon arrow down"
          img.src = iconArrowDown
          icon.classList.add("down")
        } else {
          img.alt = "icon arrow"
          img.src = iconArrow
          icon.classList.remove("down")
        }
      })
    })
  })


  return (
    <section className='faq-section'>
      <div className='container-fluid'>
        <div className='info-holder'>
          <h2>Frequently Asked Questions</h2>
          <p>
            Here are some of our FAQs. If you have any other questions you’d like
            answered please feel free to email us.
          </p>
        </div>

        <div>
          <ul className='faq-holder'>
            {faqSectionData.map(item => {
              return (
                <li key={item.id} className="faq-item">
                  {/* question block  */}
                  <span className='question row'>
                    {/* question text  */}
                    <span className='col-9 question-text'>
                      {item.question}
                    </span>
                    {/* dropdown icon  */}
                    <span className='col-3 arrow-icon' data-bs-toggle="collapse" data-bs-target={`#answer-${item.id}`}>
                      <img src={iconArrow} alt="icon arrow" />
                    </span>
                  </span>


                  {/* answer block  */}
                  <span className='answer collapse' id={`answer-${item.id}`}>
                    {/* answer text  */}
                    <span className='answer-text'>
                      {item.answer}
                    </span>
                  </span>
                </li>
              )
            })}
          </ul>

          <div className='btn-holder'>
            <button className='btn chrome-btn'>More Info</button>
          </div>
        </div>
      </div>

    </section>
  )
}

export default FaqSection
