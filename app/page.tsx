'use client';
import {NavBar} from "@/components/NavBar";
import {Container} from "@/components/Container";

import {MathJaxFormula, MathJaxProvider} from "mathjax3-react";
import {Layout} from 'antd'
import {Content, Header} from "antd/es/layout/layout";

export default function Home() {
    return (
        <MathJaxProvider>
            <Layout>
                <NavBar/>
                <Content>
                    <Container/>
                </Content>
            </Layout>
        </MathJaxProvider>
    );
}
