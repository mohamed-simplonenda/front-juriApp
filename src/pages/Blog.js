import React from 'react'
import { Container } from 'react-bootstrap'
import BlogCard from '../components/BlogCard'
import Footer from '../components/Footer'
import { Menu } from '../components/navbar'
import TopBar from '../components/topBar'

export default function Blog() {
    return (
        <div>
            <TopBar/>
            <Menu/>
            <div className="path">
                <h1>Blog</h1>
                <p>Accueill <span><i class="fas fa-angle-double-right mx-2"></i></span> Blog</p>
            </div>
            <Container>
            <BlogCard/>
            </Container>
            <Footer/>
            
        </div>
    )
}
