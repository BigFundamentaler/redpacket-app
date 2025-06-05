export default {
    darkMode: ["class"],
    content: [
        './src/**/*.{js,ts,jsx,tsx}', // 更简洁的写法，覆盖所有src下的文件
        // 或者更明确的写法：
        './src/app/**/*.{ts,tsx}',
        './src/pages/**/*.{ts,tsx}',
        './src/components/**/*.{ts,tsx}',
        './src/styles/**/*.css', // 如果自定义样式在styles目录
    ],
    theme: {
        extend: {},
    },
    plugins: [],
    // plugins: [require("tailwindcss-animate")],
}
