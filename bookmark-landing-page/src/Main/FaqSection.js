import React from 'react'
import { faqSectionData, iconArrow, iconArrowDown } from '../assets/data'

function FaqSection() {
  return (
    <section>
      <div>
        <h2>Frequently Asked Questions</h2>
        <p>
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.
        </p>
      </div>

      <div className='faq-holder'>
        <ul>
          {faqSectionData.map(item => {
            return (
              <li key={item.id}>
                <div className='row'>
                  {/* question block  */}
                  <span className='question col-12'>
                    <span className='row'>
                      {/* question text  */}
                      <span className='col-6 question-text'>
                        {item.question}
                      </span>
                      {/* dropdown icon  */}
                      <span className='col-6 arrow-icon'>
                        <img src={iconArrow} alt="icon arrow" />
                      </span>
                    </span>
                  </span>

                  {/* answer block  */}
                  <span className='answer col-12'>
                    {item.answer}
                  </span>

                </div>
              </li>
            )
          })}
        </ul>
      </div>

    </section>
  )
}

export default FaqSection
