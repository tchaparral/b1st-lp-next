import type { Metadata } from "next";
import { Roboto_Flex, Manrope } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const robotoFlex = Roboto_Flex({
  variable: "--font-roboto-flex",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: 'But First Coffee - Automação, Bots e IA para Sua Empresa',
  description: 'Automatize processos, escale seu atendimento e economize tempo com a But First Coffee. Criamos bots, fluxos inteligentes e integrações usando IA, enquanto você toma seu café.',
  openGraph: {
    title: 'But First Coffee - Automação, Bots e IA para Sua Empresa',
    description: 'Automatize processos, escale seu atendimento e economize tempo com a But First Coffee. Criamos bots, fluxos inteligentes e integrações usando IA, enquanto você toma seu café.',
    url: 'https://butfirstcoffee.com.br',
    siteName: 'But First Coffee',
    images: [
      {
        url: 'https://butfirstcoffee.com.br/images/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${robotoFlex.variable} ${manrope.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
        <Script
          id="kommo-widget"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(a,m,o,c,r,m){a[m]={id:"1044890",hash:"8cf65ffe053abaa62080fb7b0246312e233bc805f5b53b43faf28e25a22fe83f",locale:"pt",setMeta:function(p){this.params=(this.params||[]).concat([p])}};a[o]=a[o]||function(){(a[o].q=a[o].q||[]).push(arguments)};var d=a.document,s=d.createElement('script');s.async=true;s.id=m+'_script';s.src='https://gso.kommo.com/js/button.js';d.head&&d.head.appendChild(s)}(window,0,'crmPlugin',0,0,'crm_plugin'));
              window.addEventListener("DOMContentLoaded", function () {
                const botoes = document.querySelectorAll("#cta-chat-hero, #cta-chat-quem");

                function abrirChatViaClickSimulado() {
                  const botao = document.querySelector('[data-crm-widget-launcher]');
                  if (botao) {
                    botao.click();
                  } else {
                    console.warn("Botão do widget não encontrado.");
                  }
                }

                botoes.forEach(botao => {
                  botao.addEventListener("click", function (e) {
                    e.preventDefault();
                    abrirChatViaClickSimulado();
                  });
                });
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
