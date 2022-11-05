import React from 'react'

function DetailView() {
  return (
    <div>

    </div>
  )
}

export default DetailView
  // < main class="detail" >
  //     <h2>Country Data View</h2>
  //     <section>
  //       <h3>Country Detail view</h3>
  //       <div>
  //         <form href="/" method="get">
  //           <button id="returnBtn">
  //             <i class="fa fa-solid fa-arrow-left-long"></i> Back
  //           </button>
  //         </form>
  //         <div class="flag">
  //           <img src="<%= country.flags.png %>" alt="<%= country.name.official %>flag">
  //         </div>
  //       </div>
  //       <article>
  //         <h4>
  //           <%= country.name.official %>
  //         </h4>
  //         <div class="detailInfo">
  //           <div>
  //             <p><span>Native Name: </span>
  //               <%= country.name.common %>
  //             </p>
  //             <p><span>Population: </span>
  //               <%= country.population.toLocaleString("en-US") %>
  //             </p>
  //             <p><span>Region: </span>
  //               <%= country.region %>
  //             </p>
  //             <p><span>Sub Region: </span>
  //               <%= country.subregion %>
  //             </p>
  //             <p><span>Capital: </span>
  //               <%= country.capital %>
  //             </p>
  //           </div>
  //           <div>
  //             <p><span>Top Level Domain: </span>
  //               <%= country.tld[0] %>
  //             </p>
  //             <p><span>Currencies: </span>
  //               <%= Object.values(country.currencies)[0].name %>
  //             </p>
  //             <p><span>Languages: </span>
  //               <%= Object.values(country.languages).join(', ') %>
  //               </p>
  //           </div>
  //         </div>
  //         <div>
  //         <p>Border Countries: </p>
  //         <% for (let borderCountry of country.borders) {%>
  //           <span class="borders">
  //             <%= borderCountry %>
  //           </span>
  //           <% } %>
  //         </div>
  //       </article>
  //     </section>
  //   </main >