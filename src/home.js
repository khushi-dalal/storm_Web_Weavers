import React from 'react'

import styles from './home.css'
import projectStyles from './home.css';


const Home = (props) => {
  return (
    <div className={styles['container']}>
      <section className={styles['hero']}>
        <div className={styles['menu']}>
          <div id="mobile-menu" className={styles['mobile-navigation']}>
            <img
              alt="pastedImage"
              src="/pastedimage-no9b-1500h.png"
              className={styles['logo']}
            />
            <div className={styles['links']}>
              <span className={projectStyles['link']}>Solutions</span>
              <span className={projectStyles['link']}>How it works</span>
              <span className={projectStyles['link']}>Prices</span>
            </div>
            <div id="close-mobile-menu" className={styles['close-mobile-menu']}>
              <svg
                viewBox="0 0 804.5714285714286 1024"
                className={styles['icon']}
              >
                <path d="M741.714 755.429c0 14.286-5.714 28.571-16 38.857l-77.714 77.714c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-168-168-168 168c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-77.714-77.714c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l168-168-168-168c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168 168-168c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857s-5.714 28.571-16 38.857l-168 168 168 168c10.286 10.286 16 24.571 16 38.857z"></path>
              </svg>
            </div>
          </div>
          <div className={styles['desktop-navigation']}>
            <nav className={styles['centered']}>
              <div className={styles['left']}></div>
              <span className={styles['text03']}>ELEVATE.</span>
              <div className={styles['right']}>
                <span
                  className={` ${styles['sign-in']} ${projectStyles['link']} `}
                >
                  Sign in
                </span>
                <div className={styles['get-started']}>
                  <span className={styles['text04']}>Get started</span>
                </div>
                <div id="open-mobile-menu" className={styles['burger-menu']}>
                  <img
                    alt="pastedImage"
                    src="/pastedimage-yxbd.svg"
                    className={styles['mobile-menu-button']}
                  />
                </div>
              </div>
            </nav>
          </div>
          <div>
            <div className={styles['container2']}>
              {/* <Script
                html={`<script> */}
/
{/* </script>`}
              ></Script> */}
            </div>
          </div>
        </div>
        <header className={styles['header']}>
          <h1 className={styles['text05']}>ELEVATE YOUR WORK ENVIRONMENT</h1>
          <p className={styles['text06']}>
            EVERY EMPLOYEE IS A MUST FOR THE COMPANY
          </p>
          <div className={styles['get-started1']}>
            <span className={styles['text07']}>Get started</span>
          </div>
        </header>
        <div className={styles['dashboard-preview']}>
          <div className={styles['outline']}>
            <img
              alt="pastedImage"
              src="/pastedimage-cdo-1000h.png"
              loading="lazy"
              className={styles['image']}
            />
          </div>
        </div>
      </section>
      <section className={styles['statistics']}></section>
      <section className={styles['banners']}>
        <div className={styles['banner-manage']}>
          <div className={styles['container3']}>
            <div className={styles['left1']}>
              <span
                className={` ${styles['text08']} ${projectStyles['title']} `}
              >
                MANAGE ALL YOUR WORK RELATED THINGS
              </span>
              <div
                className={` ${styles['get-started2']} ${projectStyles['template-button']} `}
              >
                <span className={styles['text09']}>Get started</span>
              </div>
            </div>
            <div className={styles['image-container']}>
              <img
                alt="pastedImage"
                src="/pastedimage-wvmq%201-1200w.png"
                className={styles['cards-image']}
              />
            </div>
          </div>
        </div>
        <div className={styles['banner-advanced-analytics']}>
          <div className={styles['centered-container']}>
            <div className={styles['image-container1']}>
              <img
                alt="pastedImage"
                src="/test-1200w.png"
                className={styles['cards-image1']}
              />
            </div>
            <div className={styles['right1']}>
              <h2 className={` ${styles['text10']} ${projectStyles['title']} `}>
                Advanced analytics, easy to understand.
              </h2>
              <div className={styles['category']}></div>
              <div className={styles['category1']}></div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles['pricing']}>
        <div className={styles['centered-container1']}>
          <div className={styles['heading']}>
            <span className={` ${styles['text11']} ${projectStyles['title']} `}>
              Pricing for all kind of businesses
            </span>
            <span className={styles['text12']}>
              Create next-generation solutions for small business customers with
              pricing options that accommodate everyone.
            </span>
            <div className={styles['selection']}>
              <span className={styles['text13']}>Monthly</span>
              <span className={styles['text14']}>Yearly</span>
            </div>
          </div>
          <div className={styles['cards']}>
            <div className={styles['card']}>
              <span className={styles['text15']}>Free</span>
              <span className={styles['text16']}>
                Unlimited lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed doliqua.
              </span>
              <div
                className={` ${styles['get-started3']} ${projectStyles['template-button']} `}
              >
                <span className={styles['text17']}>Start for free</span>
              </div>
              <span className={styles['text18']}>What&apos;s included</span>
              <div className={styles['bullet-points']}>
                <div className={styles['point']}>
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className={styles['icon02']}
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className={styles['text19']}>
                    Sed ut pespiciatis unde omnis
                  </span>
                </div>
                <div className={styles['point01']}>
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className={styles['icon04']}
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className={styles['text20']}>
                    Sed ut pespiciatis unde omnis
                  </span>
                </div>
              </div>
            </div>
            <div className={styles['card1']}>
              <span className={styles['text21']}>Pay as you go</span>
              <span className={styles['text22']}>
                <span>Launch your lorem for $49/mo</span>
                <br></br>
                <span>lorem ipsum dolor sit amet, consectetur adipiscing.</span>
              </span>
              <div
                className={` ${styles['get-started4']} ${projectStyles['template-button']} `}
              >
                <span className={styles['text26']}>
                  <span>Upgrade now</span>
                  <br></br>
                </span>
              </div>
              <span className={styles['text29']}>What&apos;s included</span>
              <div className={styles['bullet-points1']}>
                <div className={styles['point02']}>
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className={styles['icon06']}
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className={styles['text30']}>
                    Sed ut pespiciatis unde omnis
                  </span>
                </div>
                <div className={styles['point03']}>
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className={styles['icon08']}
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className={styles['text31']}>
                    Sed ut pespiciatis unde omnis
                  </span>
                </div>
                <div className={styles['point04']}>
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className={styles['icon10']}
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className={styles['text32']}>
                    Sed ut pespiciatis unde omnis
                  </span>
                </div>
                <div className={styles['point05']}>
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className={styles['icon12']}
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className={styles['text33']}>
                    Sed ut pespiciatis unde omnis
                  </span>
                </div>
              </div>
            </div>
            <div className={styles['card2']}>
              <span className={styles['text34']}>Enterprise</span>
              <span className={styles['text35']}>
                <span>
                  Custom-built lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed doliqua.
                </span>
                <br></br>
              </span>
              <div
                className={` ${styles['get-started5']} ${projectStyles['template-button']} `}
              >
                <span className={styles['text38']}>
                  <span>Contact us</span>
                  <br></br>
                </span>
              </div>
              <span className={styles['text41']}>What&apos;s included</span>
              <div className={styles['bullet-points2']}>
                <div className={styles['point06']}>
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className={styles['icon14']}
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className={styles['text42']}>
                    Sed ut pespiciatis unde omnis
                  </span>
                </div>
                <div className={styles['point07']}>
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className={styles['icon16']}
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className={styles['text43']}>
                    Sed ut pespiciatis unde omnis
                  </span>
                </div>
                <div className={styles['point08']}>
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className={styles['icon18']}
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className={styles['text44']}>
                    Sed ut pespiciatis unde omnis
                  </span>
                </div>
                <div className={styles['point09']}>
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className={styles['icon20']}
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className={styles['text45']}>
                    Sed ut pespiciatis unde omnis
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles['action-bar']}>
        <div className={styles['action']}>
          <div className={styles['heading1']}>
            <span className={` ${styles['text46']} ${projectStyles['title']} `}>
              <span>Get leads now </span>
              <br></br>
              <span>with Active!</span>
            </span>
            <span className={styles['text50']}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </span>
            <div
              className={` ${styles['get-started6']} ${projectStyles['template-button']} `}
            >
              <span className={styles['text51']}>
                <span>Start free</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className={styles['images']}>
            <img
              alt="image"
              src="/e564eaa3c4fab71792794d666a281742-1200w.png"
              className={styles['image1']}
            />
          </div>
        </div>
      </section>
      <footer className={styles['footer']}></footer>
      <span>Text</span>
    </div>
  )
}

export default Home