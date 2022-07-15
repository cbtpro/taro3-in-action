import { Component } from 'react'
import { Button, View, Text } from '@tarojs/components'
import CanvasPoster from '@/components/canvas-poster';
import CanvasPosterDemo from '@/components/canvas-poster-demo';

import './index.scss'

interface Props {
  message: string;
}
interface State {
  message: string;
}
export default class Index extends Component<Props, State> {
  // 默认props
  static defaultProps = {
    message: 'Hello world!!!!',
  }
  constructor(props: Props) {
    super(props);
    const { message } = props;
    this.state = {
      message: message,
    };
  }
  UNSAFE_componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  updateMessageHandler = () => {
    this.setState({
      message: new Date().toUTCString(),
    });
  };
  render () {
    const { message } = this.state;
    return (
      <View className='index'>
        <Button onClick={this.updateMessageHandler}>更新消息</Button>
        <Text>{message}</Text>
        <CanvasPoster message={message} />
        <CanvasPosterDemo message={message}  />
      </View>
    )
  }
}
