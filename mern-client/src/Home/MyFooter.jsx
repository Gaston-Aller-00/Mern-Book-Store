import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import {  FaBlog } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const MyFooter = () => {
  return (
    <Footer container className='bg-teal-100'>
    <div className="w-full">
      <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
        <div>
        <Link to="shop" className="text-2xl font-bold text-blue-700">
            <FaBlog className="inline-block" />
            Books
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
          <div>
            <Footer.Title title="about" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">Books</Footer.Link>
              <Footer.Link href="#">FAQ</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Follow us" />
            <Footer.LinkGroup col>
              <Footer.Link target='_blank' href="https://github.com/Gaston-Aller-00">Github</Footer.Link>
              <Footer.Link href="#">Discord</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Legal" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">Privacy Policy</Footer.Link>
              <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
      </div>
      <Footer.Divider />
      <div className="w-full sm:flex sm:items-center sm:justify-between">
      <Footer.Copyright href="#" by="Books™" year={2024} />
        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
          <Footer.Icon href="https://www.linkedin.com/in/gastonaller/" target='_blank' icon={BsFacebook} />
          <Footer.Icon href="https://www.linkedin.com/in/gastonaller/" target='_blank' icon={BsInstagram} />
          <Footer.Icon href="https://www.linkedin.com/in/gastonaller/" target='_blank' icon={BsTwitter} />
          <Footer.Icon href="https://github.com/Gaston-Aller-00" target='_blank' icon={BsGithub} />
        </div>
      </div>
    </div>
  </Footer>
  )
}

export default MyFooter;