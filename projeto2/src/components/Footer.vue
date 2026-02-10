<script setup lang="ts">
import XImg from '@/assets/imagens/twitter.png'
import instagramImg from '@/assets/imagens/instagram.png'
import youtubeImg from '@/assets/imagens/youtube.png'
</script>
<template>
    <footer>
        <div class="footer-content">
            <div class="social">
                <a href="#">
                    <img :src="instagramImg" alt="Instagram" />
                </a>
                <a href="#">
                    <img :src="XImg" alt="X" />
                </a>
                <a href="#">
                    <img :src="youtubeImg" alt="YouTube" />
                </a>
            </div>
            <address>
                Av. Sen. Salgado Filho, 1559 – Tirol, Natal – RN<br />
                <strong>CEP:</strong> 59015-000
            </address>
        </div>
    </footer>
</template>
<style scoped>
footer {
    background-color: var(--primary-color);
    color: #ffffff;
    font-size: 14px;
    margin-top: 6rem;
    min-height: 160px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    box-sizing: border-box;
}

.footer-content {
    max-width: 1440px;
    margin: 0 auto;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    padding: 40px 100px;
    gap: 20px;
    box-sizing: border-box;
}

.social {
    display: flex;
    gap: 10px;
    justify-content: flex-end;
    margin-bottom: 8px;
}

.social img {
    width: 38px;
    cursor: pointer;
    transition: 0.2s;
    border: 1px solid black;
}

.social img:hover {
    transform: scale(1.1);
    opacity: 0.8;
}

main section:last-child {
    margin-bottom: 6rem;
}

@media (max-width: 768px) {
    footer {
        min-height: auto;
        margin-top: 4rem;
    }

    .footer-content {
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 30px 50px;
    }

    .footer-left {
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 20px;
        margin: 0;
    }

    .footer-logo,
    .logo-if {
        width: 160px;
    }

    .footer-right {
        align-items: center;
        text-align: center;
        margin-top: 20px;
    }

    .footer-right p {
        font-size: 16px;
        margin: 6px 0;
    }

    address {
        font-size: 14px;
        line-height: 1.5;
    }

    .social {
        justify-content: center;
        margin-bottom: 12px;
    }

    .social img {
        width: 34px;
    }
}

@media (max-width: 480px) {
    .footer-content {
        padding: 20px;
    }

    .footer-logo,
    .logo-if {
        width: 130px;
    }

    .footer-right p {
        font-size: 15px;
    }

    .copy {
        font-size: 11px;
        padding: 12px;
    }

    address {
        font-size: 13px;
    }
}
</style>