<script lang="ts">
    import { page } from '$app/stores';

    const menuItems = [
        { 
            href: '/', 
            label: 'Accueil', 
            icon: 'M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z',
            isPlus: false,
            isMushroom: false,
            position: 'start'
        },
        { 
            href: '/search/1', 
            label: 'Recherche', 
            icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
            isPlus: false,
            isMushroom: false,
            position: 'middle-left'
        },
        { 
            href: '/add', 
            label: '', 
            icon: 'M12 4v16M4 12h16',
            isPlus: true,
            isMushroom: false,
            position: 'center'
        },
        { 
            href: '/messages', 
            label: 'Messages', 
            icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
            isPlus: false,
            isMushroom: false,
            position: 'middle-right'
        },
        { 
            href: '/profile', 
            label: 'Profil', 
            isPlus: false,
            isMushroom: true,
            position: 'end'
        }
    ];
</script>

<style>
    .tab-bar-bg {
        background-color: #1A1F15;
    }
    
    .plus-button {
        width: 32px;
        height: 32px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    .nav-item.middle-left {
        margin-right: 3rem;
    }

    .nav-item.middle-right {
        margin-left: 3rem;
    }
</style>

<div class="fixed bottom-0 left-0 right-0 tab-bar-bg h-16">
    <nav class="flex justify-between items-center px-6 h-full relative">
        {#each menuItems as { href, label, icon, isPlus, isMushroom, position }}
            <a 
                {href}
                class="flex flex-col items-center text-[#A4AC86] nav-item {position} {isPlus ? 'absolute left-1/2 -translate-x-1/2' : ''}"
            >
                {#if isPlus}
                    <div class="plus-button bg-white rounded-full flex items-center justify-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="#1A1F15"
                            stroke-width="2"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d={icon}
                            />
                        </svg>
                    </div>
                {:else if isMushroom}
                    <svg width="24" height="24" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.0003 1.625C12.2155 1.625 9.54483 2.73125 7.57569 4.70038C6.18301 6.09303 5.22198 7.83664 4.77865 9.72327C4.35547 11.5241 5.90589 12.875 7.50031 12.875H11.25V16.045C11.25 16.5697 11.1399 17.0886 10.9268 17.568L9.94392 19.7795C9.81605 20.0672 9.75 20.3785 9.75 20.6933V21.5C9.75 22.7427 10.7573 23.75 12 23.75H18C19.2427 23.75 20.25 22.7427 20.25 21.5V20.6933C20.25 20.3785 20.184 20.0672 20.0561 19.7795L19.0732 17.568C18.8601 17.0886 18.75 16.5697 18.75 16.045V12.875H22.5003C24.0947 12.875 25.6452 11.5241 25.222 9.72327C24.7786 7.83664 23.8176 6.09303 22.425 4.70038C20.4558 2.73125 17.7851 1.625 15.0003 1.625ZM17.25 12.875V16.045C17.25 16.7796 17.4042 17.506 17.7025 18.1773L18.6854 20.3887C18.728 20.4846 18.75 20.5884 18.75 20.6933V21.5C18.75 21.9142 18.4142 22.25 18 22.25H12C11.5858 22.25 11.25 21.9142 11.25 21.5V20.6933C11.25 20.5884 11.272 20.4846 11.3146 20.3887L12.2975 18.1773C12.5958 17.506 12.75 16.7796 12.75 16.045V12.875H17.25ZM18 11.375H22.5003C23.3912 11.375 23.9071 10.6849 23.7617 10.0664C23.3817 8.4492 22.5579 6.95473 21.3643 5.76106C19.6764 4.07321 17.3872 3.125 15.0003 3.125C12.6134 3.125 10.3242 4.07321 8.63634 5.76102C7.44267 6.95473 6.6189 8.4492 6.23888 10.0664C6.09353 10.6849 6.60945 11.375 7.50031 11.375H12H18Z" fill="#A4AC86"/>
                    </svg>
                {:else}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="#A4AC86"
                        stroke-width="2"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d={icon}
                        />
                    </svg>
                {/if}
                {#if label}
                    <span class="text-xs mt-1">{label}</span>
                {/if}
            </a>
        {/each}
    </nav>
</div>