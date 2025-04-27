import {View, StyleSheet} from 'react-native';
import React, {ReactNode} from 'react';

interface LayoutProps {
  children: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children, header, footer}) => {
  return (
    <View style={styles.container}>
      {header && <View style={styles.header}>{header}</View>}
      <View style={styles.content}>{children}</View>
      {footer && <View style={styles.footer}>{footer}</View>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe6cc',
  },
  header: {
    padding: 10,
    // paddingBottom: 5,
    flex: 1,
    maxHeight: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopColor: '#e0e0e0',
    // backgroundColor: 'green',
  },
  content: {
    flex: 1,
    padding: 16,
    paddingTop: 5,
    gap: 0,
  },
  footer: {
    padding: 16,
    paddingTop: 5,
    flex: 1,
    maxHeight: 80,
    // justifyContent: 'center',
    alignItems: 'center',
    borderTopColor: '#e0e0e0',
  },
});

export default Layout;
