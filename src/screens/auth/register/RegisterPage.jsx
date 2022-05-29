import React from 'react';

import {
    Container,
    Form, FormTitle,
    Group, GroupTitle, GroupInput, GroupWarning,
    SubmitButton, Notification,
} from './RegisterPage.styles';
import { contentRegisterPage } from '../../../constants';



export const RegisterPage = ({
    data,
    error,
    handleChange,
    handleSubmit,
}) => {

    return (
        <Container>
            <Form>
                <FormTitle>{contentRegisterPage.title}</FormTitle>

                <Group>
                    <GroupTitle>{contentRegisterPage.fields.fullname.label}</GroupTitle>
                    <GroupInput type='text' name={contentRegisterPage.fields.fullname.name} value={data.fullname} onChange={handleChange} />
                    {data.submitted && !data.fullname && <GroupWarning>{contentRegisterPage.fields.fullname.warning}</GroupWarning>}
                </Group>

                <Group>
                    <GroupTitle>{contentRegisterPage.fields.email.label}</GroupTitle>
                    <GroupInput type='email' name={contentRegisterPage.fields.email.name} value={data.email} onChange={handleChange} />
                    {data.submitted && !data.email && <GroupWarning>{contentRegisterPage.fields.email.warning}</GroupWarning>}
                </Group>

                <Group>
                    <GroupTitle>{contentRegisterPage.fields.password.label}</GroupTitle>
                    <GroupInput type='password' name={contentRegisterPage.fields.password.name} value={data.password} onChange={handleChange} />
                    {data.submitted && !data.password && <GroupWarning>{contentRegisterPage.fields.password.warning}</GroupWarning>}
                </Group>

                <Group>
                    <GroupTitle>{contentRegisterPage.fields.passwordConfirm.label}</GroupTitle>
                    <GroupInput type='password' name={contentRegisterPage.fields.passwordConfirm.name} value={data.passwordConfirm} onChange={handleChange} />
                    {data.submitted && (!data.passwordConfirm || data.password !== data.passwordConfirm) && <GroupWarning>{contentRegisterPage.fields.passwordConfirm.warning}</GroupWarning>}
                </Group>

                <Group>
                    {error && <Notification>{error}</Notification>}
                    <SubmitButton onClick={handleSubmit}>{contentRegisterPage.submitBtn}</SubmitButton>
                </Group>
            </Form>
        </Container>
    );
};