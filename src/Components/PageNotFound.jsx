import React from 'react'
import BackButton from './BackButton'
function PageNotFound() {
  return (
    <section class="bg-background">
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-sm text-center">
          <h1 class="mb-4 text-2xl tracking-tight font-extrabold lg:text-8xl text-text">Page Under Construction</h1>
          <p class="mb-4 text-3xl tracking-tight font-bold text-text md:text-4xl ">We are Coming up With something New</p>
          <p class="mb-4 text-lg font-light text-text ">Sorry, we can't find that page. You'll find lots to explore on the home page. </p>
          <div className="flex mx-auto justify-center">
            <div className=" flex">
              <BackButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PageNotFound