<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const props = defineProps(['duration']);

const currentTime = ref(0);
const progress = ref(0);
let timer;

const formatTime = () => {
const minutes = Math.floor((props.duration - currentTime.value) / 60);
const seconds = (props.duration - currentTime.value) % 60;
return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
};

const startTimer = () => {
timer = setInterval(() => {
    if (currentTime.value < props.duration) {
    currentTime.value += 1;
      progress.value = (currentTime.value / props.duration) * 100;
    } else {
    stopTimer();
    }
}, 1000);
};

const stopTimer = () => {
clearInterval(timer);
};

onMounted(() => {
startTimer();
});

onBeforeUnmount(() => {
stopTimer();
});
</script>

<template>
<div class="timer-container">
    <div class="timer">
    <div class="progress" :style="{ width: progress + '%' }"></div>
    <div class="time">{{ formatTime() }}</div>
    </div>
</div>
</template>

<style scoped>
.timer-container {
margin: 20px;
}

.timer {
position: relative;
height: 30px;
border: 1px solid #ccc;
border-radius: 50px 50px;
}

.progress {
position: absolute;
top: 0;
left: 0;
height: 100%;
background-color: #33c7c7;
transition: width 1s linear;
border-radius: 50px 50px;

}

.time {
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
}
</style>
