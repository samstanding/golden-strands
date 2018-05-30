import React from 'react';
import { NavBar } from '../NavBar/NavBar';
import { PageHeader } from 'react-bootstrap';


export const HomeHeader = () => (
            <PageHeader className="header">
                <NavBar />
                <div className="header-text">
                <h1>The Golden Strands Almanac</h1>
                <h3>A Blog for Everything Golden Strands</h3>
                </div>
            </PageHeader>
)