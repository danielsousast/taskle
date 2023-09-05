import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';

export const HomeContainer = styled.SafeAreaView`
  flex: 1;
  padding: 16px;
  background-color: ${({theme}) => theme.colors.background};
`;

export const HomeContent = styled.View`
  flex: 1;
  padding-top: 16px;
`;

export const HomeTitle = styled.Text<{bold?: boolean}>`
  ${({bold}) => bold && 'font-weight: bold;'}
  margin-bottom: 16px;
  font-size: 24px;
  margin-left: 16px;
`;

export const styles = StyleSheet.create({
  flashListContentStyle: {
    padding: 16,
  },
});
