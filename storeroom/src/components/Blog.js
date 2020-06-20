import React from "react";
import AOS from "aos";
import "./Blog.css";

const Blog = () => {
  AOS.init({ duration: 1000, delay: 0 });

  return (
    <section className="container bg-dark " style={{ color: "white" }}>
      <div data-aos="fade-right">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            src="https://cdn.pixabay.com/photo/2016/11/18/17/42/barbecue-1836053__340.jpg"
            alt=""
            className="images "
            style={{ width: "80%", height: "340px" }}
          />
        </div>
        <div>
          <h1
            style={{
              display: "flex",
              justifyContent: "center",

              color: "orange",
            }}
          >
            Barbecue
          </h1>
        </div>

        <div className="" style={{ float: "right" }}>
          <div className="row">
            <div className="col-6">
              <div>
                <h4 style={{ color: "orange" }}>Ingredients</h4>
              </div>
              <ul>
                <li>
                  1 pound chicken thighs, boneless skinless or chicken breasts
                </li>
                <li>1/4 teaspoon black pepper</li>
                <li>1/2 teaspoon salt or to taste</li>
                <li>
                  1 tablespoon 1/2 teaspoon optional ½ teaspoon or onion powder
                </li>
                <li>2 tablespoons olive oil</li>
                <li>1 tablespoon lime juice optional</li>
                <li>2 cloves garlic minced</li>
                <li>8 small corn or flour tortillas Pico de Gallo</li>

                <li>1/2 cup finely chopped onion</li>

                <li>1/2 cup finely chopped tomato</li>
                <li>
                  {" "}
                  1/4 cup finely chopped cilantro 1 finely chopped jalapeño
                  deseeded 1 tsp lime juice pinch salt and pepper to taste
                </li>
              </ul>
            </div>

            <div className="col-6">
              <div>
                <h4 style={{ color: "orange" }}>methods</h4>
              </div>
              <ul>
                <li>
                  Add the chicken, garlic, olive oil, lime, and spices, to a
                  large bowl or zip-seal bag and stir or shake to combine.
                </li>
                <li>
                  Heat a large pan to medium-high heat. Cook chicken 6-7 minutes
                  per side or until it is no longer pink and the internal
                  temperature of 165 degrees F. Remove from heat and cool for at
                  least 5 minutes. Slice or chop into small cubes.
                </li>
                <li>
                  While the chicken is cooking, combine the chopped tomato,
                  jalapeno, onion, cilantro, and lime juice in a small bowl.
                  Char tortillas on the stovetop over the flame until lightly
                  charred (this step is optional).
                </li>
                <li>
                  Assemble tacos by placing about 1/4 cup of chicken into each
                  tortilla. Top with a few tablespoons of the onion-tomato
                  mixture and a drizzle of cilantro sauce
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Blog;
