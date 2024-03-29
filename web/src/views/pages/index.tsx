import React from 'react';
import { connect } from 'dva';
import { Button, Form, Input } from 'antd';
import { setValue } from '@/actions/test';

function LoginPage(props: any) {
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

function mapStateToProps({ test }: { test: any }) {
    return {
        value: test.value,
    };
}

function mapDispatchToProps(dispatch: any) {
    return {
        setValue(value: string) {
            return dispatch(setValue(value));
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
