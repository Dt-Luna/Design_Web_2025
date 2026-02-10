<script setup lang="ts">
import XImg from '@/assets/imagens/twitter.png'
import instagramImg from '@/assets/imagens/instagram-logo.png'
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
    gap: 50px;
    margin-bottom: 8px;
}

.social img {
    width: 38px;
    cursor: pointer;
    transition: 0.2s;
}

.social img:hover {
    transform: scale(1.1);
    opacity: 0.8;
}

main section:last-child {
    margin-bottom: 6rem;
}
</style>