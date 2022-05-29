// static content for homepage
export const contentHomepage = {
    title: 'Monkids TV',
    emptyState: {
        title: 'Choose an animal to start',
        text: 'Curated fun animal gifs to keep your kids busy'
    }
};


// static content for login page
export const contentLoginPage = {
    title: 'Login to Monkids TV',
    fields: {
        username: {
            name: 'username',
            label: 'Username:',
            warning: 'Username is required',
        },
        password: {
            name: 'password',
            label: 'Password:',
            warning: 'Password is required',
        }
    },
    submitBtn: 'LOG IN',
};


// static content for register page
export const contentRegisterPage = {
    title: 'Create account',
    fields: {
        fullname: {
            name: 'fullname',
            label: 'Your full name:',
            warning: 'Full name is required',
        },
        email: {
            name: 'email',
            label: 'Your email address:',
            warning: 'Email is required',
        },
        password: {
            name: 'password',
            label: 'Enter password:',
            warning: 'Password is required',
        },
        passwordConfirm: {
            name: 'passwordConfirm',
            label: 'Confirm password:',
            warning: 'Password should match',
        }
    },
    submitBtn: 'REGISTER',
};


// static content for animal details page
export const contentAnimalPage = {
    title: 'Animal Info',
    emptyState: {
        title: 'Choose an animal to start',
        text: 'Curated fun animal gifs to keep your kids busy'
    }
};