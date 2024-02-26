    const root = document.documentElement;

    const getAllBlack = () => {
        const primaryDark = getComputedStyle(root).getPropertyValue("--dark-background-primary")
        const secondaryDark = getComputedStyle(root).getPropertyValue("--dark-background-secondary")
        const componentDark = getComputedStyle(root).getPropertyValue("--dark-component")
        const buttonBorderDark = getComputedStyle(root).getPropertyValue("--dark-button-border")
        const buttonBgDark = getComputedStyle(root).getPropertyValue("--dark-button-background")
        const textPrimaryDark = getComputedStyle(root).getPropertyValue("--dark-primary-text")
        const textSecondaryDark = getComputedStyle(root).getPropertyValue("--dark-secondary-text")

        return [primaryDark, secondaryDark, componentDark, buttonBorderDark, buttonBgDark, textPrimaryDark, textSecondaryDark]
    }

    const getAllWhite = () => {
        const primaryLight = getComputedStyle(root).getPropertyValue("--light-background-primary")
        const secondaryLight = getComputedStyle(root).getPropertyValue("--light-background-secondary")
        const componentLight = getComputedStyle(root).getPropertyValue("--light-component")
        const buttonBorderLight = getComputedStyle(root).getPropertyValue("--light-button-border")
        const buttonBgLight = getComputedStyle(root).getPropertyValue("--light-button-background")
        const textPrimaryLight = getComputedStyle(root).getPropertyValue("--light-primary-text")
        const textSecondaryLight = getComputedStyle(root).getPropertyValue("--light-secondary-text")

        return [primaryLight, secondaryLight, componentLight, buttonBorderLight, buttonBgLight, textPrimaryLight, textSecondaryLight]
    }

    export const toggleTheme = (theme) => {
        const [primaryDark, secondaryDark, componentDark, buttonBorderDark, buttonBgDark, textPrimaryDark, textSecondaryDark] = getAllBlack()
        const [primaryLight, secondaryLight, componentLight, buttonBorderLight, buttonBgLight, textPrimaryLight, textSecondaryLight] = getAllWhite()

        if(theme && theme === "light") {
            root.style.setProperty('--background-primary', primaryLight)
            root.style.setProperty('--background-secondary', secondaryLight)
            root.style.setProperty('--component', componentLight)
            root.style.setProperty('--button-border', buttonBorderLight)
            root.style.setProperty('--button-background', buttonBgLight)
            root.style.setProperty('--secondary-text', textSecondaryLight)
            root.style.setProperty('--primary-text', textPrimaryLight)
        } else if (theme && theme === "dark"){
            root.style.setProperty('--background-primary', primaryDark)
            root.style.setProperty('--background-secondary', secondaryDark)
            root.style.setProperty('--component', componentDark)
            root.style.setProperty('--button-border', buttonBorderDark)
            root.style.setProperty('--button-background', buttonBgDark)
            root.style.setProperty('--secondary-text', textSecondaryDark)
            root.style.setProperty('--primary-text', textPrimaryDark)
        } else {
            return
        }
    }

