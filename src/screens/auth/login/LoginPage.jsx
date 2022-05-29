import React from 'react';

import {
    Container,
    Form, FormTitle,
    Group, GroupTitle, GroupInput, GroupWarning,
    SubmitButton, Notification,
} from './LoginPage.styles';
import { contentLoginPage } from '../../../constants';



export const LoginPage = ({
    data,
    error,
    handleChange,
    handleLogin,
}) => {

    return (
        <Container>
            <Form>
                <FormTitle>{contentLoginPage.title}</FormTitle>

                <Group>
                    <GroupTitle>{contentLoginPage.fields.username.label}</GroupTitle>
                    <GroupInput type='text' name={contentLoginPage.fields.username.name} value={data.username} onChange={handleChange} />
                    {data.submitted && !data.username && <GroupWarning>{contentLoginPage.fields.username.warning}</GroupWarning>}
                </Group>

                <Group>
                    <GroupTitle>{contentLoginPage.fields.password.label}</GroupTitle>
                    <GroupInput type='password' name={contentLoginPage.fields.password.name} value={data.password} onChange={handleChange} />
                    {data.submitted && !data.password && <GroupWarning>{contentLoginPage.fields.password.warning}</GroupWarning>}
                </Group>

                <Group>
                    {error && <Notification>{error}</Notification>}
                    <SubmitButton onClick={handleLogin}>{contentLoginPage.submitBtn}</SubmitButton>
                </Group>
            </Form>
        </Container>
    );
};