# Material-UI 사용방법

## 목차

- [1. 컴포넌트 종류](#1-컴포넌트-종류)
  - [1-1. 레이아웃 관련 컴포넌트](#1-1-레이아웃-관련-컴포넌트)
  - [1-2. 네비게이션 관련 컴포넌트](#1-2-네비게이션-관련-컴포넌트)
  - [1-3. 입력(Form) 관련 컴포넌트](#1-3-입력form-관련-컴포넌트)
  - [1-4. 정보 표시 관련 컴포넌트](#1-4-정보-표시-관련-컴포넌트)
  - [1-5. 알림창 관련 컴포넌트](#1-5-알림창-관련-컴포넌트)
  - [1-6. 기타 컴포넌트](#1-6-기타-컴포넌트)
- [2. 단위 소개](#2-단위-소개)
  - [2-1. Breakpoints](#2-1-breakpoints)
  - [2-2. Typography](#2-2-typography)
  - [2-3. Appbar](#2-3-appbar)
  - [2-4. Drawer](#2-4-drawer)
  - [2-5. Button](#2-5-button)
  - [2-6. Grid](#2-6-grid)
- [3. 미디어 쿼리 사용 방법](#3-미디어-쿼리-사용-방법)
- [4. 스타일링 방법](#4-스타일링-방법)
  - [4-1. styled 함수와 미디어 쿼리](#4-1-styled-함수와-미디어-쿼리)
  - [4-2. sx props 사용](#4-2-sx-prop-사용)

## 1. 컴포넌트 종류

Material-UI는 다양한 UI 컴포넌트를 제공하여 반응형 웹 애플리케이션을 쉽게 구축할 수 있도록 도와줍니다.
주요 컴포넌트들을 카테고리별로 소개하겠습니다.

### 1-1. 레이아웃 관련 컴포넌트

#### &lt;Container&gt;

페이지의 콘텐츠를 중앙에 정렬하고 양쪽에 패딩을 추가합니다.

```javascript
import Container from '@mui/material/Container';

<Container>Your content here</Container>;
```

#### &lt;Grid&gt;

화면을 격자로 분할하여 반응형 레이아웃을 만들 수 있습니다.

```javascript
import Grid from '@mui/material/Grid';

<Grid container spacing={2}>
  <Grid item xs={12} sm={6}>
    Left Content
  </Grid>
  <Grid item xs={12} sm={6}>
    Right Content
  </Grid>
</Grid>;
```

#### &lt;Box&gt;

간단한 레이아웃 구성 및 스타일링에 유용한 컨테이너입니다.

```javascript
import Box from '@mui/material/Box';

<Box sx={{ width: 300, height: 300, backgroundColor: 'primary.main' }}>Box Content</Box>;
```

### 1-2. 네비게이션 관련 컴포넌트

#### &lt;AppBar&gt;

```javascript
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

<AppBar position="static">
  <Toolbar>
    <Typography variant="h6">App Bar</Typography>
  </Toolbar>
</AppBar>;
```

#### &lt;Drawer&gt;

```javascript
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

<Drawer variant="permanent">
  <List>
    <ListItem button>
      <ListItemText primary="Item 1" />
    </ListItem>
    <ListItem button>
      <ListItemText primary="Item 2" />
    </ListItem>
  </List>
</Drawer>;
```

#### &lt;BottomNavigation&gt;

```javascript
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

<BottomNavigation>
  <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
  <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
  <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
</BottomNavigation>;
```

### 1-3. 입력(Form) 관련 컴포넌트

#### &lt;Button&gt;

```javascript
import Button from '@mui/material/Button';

<Button variant="contained" color="primary">
  Primary Button
</Button>;
```

#### &lt;TextField&gt;

```javascript
import TextField from '@mui/material/TextField';

<TextField label="Name" variant="outlined" />;
```

#### &lt;Checkbox&gt;

```javascript
import Checkbox from '@mui/material/Checkbox';

<Checkbox />;
```

#### &lt;Radio&gt;

```javascript
import Radio from '@mui/material/Radio';

<Radio />;
```

#### &lt;Switch&gt;

```javascript
import Switch from '@mui/material/Switch';

<Switch />;
```

### 1-4. 정보 표시 관련 컴포넌트

#### &lt;Table&gt;

```javascript
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

<TableContainer component={Paper}>
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>Name</TableCell>
        <TableCell align="right">Age</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableCell>John</TableCell>
        <TableCell align="right">30</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Jane</TableCell>
        <TableCell align="right">28</TableCell>
      </TableRow>
    </TableBody>
  </Table>
</TableContainer>;
```

#### &lt;Card&gt;

```javascript
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

<Card>
  <CardContent>
    <Typography variant="h5" component="div">
      Card Title
    </Typography>
    <Typography variant="body2">Card content goes here.</Typography>
  </CardContent>
</Card>;
```

#### &lt;List&gt;

```javascript
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

<List>
  <ListItem>
    <ListItemText primary="Item 1" />
  </ListItem>
  <ListItem>
    <ListItemText primary="Item 2" />
  </ListItem>
</List>;
```

### 1-5. 알림창 관련 컴포넌트

#### &lt;Snackbar&gt;

```javascript
import Snackbar from '@mui/material/Snackbar';

<Snackbar open={true} message="This is a snackbar" />;
```

#### &lt;Alert&gt;

```javascript
import Alert from '@mui/material/Alert';

<Alert severity="error">This is an error alert</Alert>;
```

#### &lt;Dialog&gt;

```javascript
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

<Dialog open={true}>
  <DialogTitle>Dialog Title</DialogTitle>
  <DialogContent>
    <DialogContentText>Dialog content goes here.</DialogContentText>
  </DialogContent>
  <DialogActions>
    <Button onClick={() => console.log('Cancel')}>Cancel</Button>
    <Button onClick={() => console.log('Confirm')}>Confirm</Button>
  </DialogActions>
</Dialog>;
```

### 1-6. 기타 컴포넌트

#### &lt;Avatar&gt;

```javascript
import Avatar from '@mui/material/Avatar';

<Avatar alt="User Name" src="/path/to/image.jpg" />;
```

#### &lt;Badge&gt;

```javascript
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

<Badge badgeContent={4} color="primary">
  <MailIcon />
</Badge>;
```

#### &lt;Tooltip&gt;

```javascript
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

<Tooltip title="Delete">
  <IconButton>
    <DeleteIcon />
  </IconButton>
</Tooltip>;
```

이외에도 다양한 컴포넌트들이 있습니다. [Material-UI 공식 문서](https://mui.com/material-ui/all-components/)를 참조하세요.

## 2. 단위 소개

### 2-1. Breakpoints

Breakpoints는 반응형 디자인을 구현할 때 화면 크기에 따라 레이아웃을 조정하기 위해 사용하는 기준점입니다. 각 브레이크포인트는 특정 너비 이상 또는 이하일 때 스타일이나 레이아웃을 변경하는 데 사용됩니다.

#### 주요 브레이크포인트 약어

- **xs**: `extra-small` (초소형) - 0px 이상
- **sm**: `small` (소형) - 600px 이상
- **md**: `medium` (중형) - 900px 이상
- **lg**: `large` (대형) - 1200px 이상
- **xl**: `extra-large` (초대형) - 1536px 이상

예를 들어, `xs`는 초소형 기기(예: 휴대폰)에서 사용되고, `xl`는 초대형 기기(예: 큰 모니터)에서 사용됩니다.

### 2-2. Typography

Typography는 텍스트 스타일링을 위한 컴포넌트입니다. 다양한 텍스트 요소(예: 제목, 본문, 캡션 등)에 대한 스타일을 쉽게 적용할 수 있습니다.

#### 주요 Typography 속성

- **variant**: 텍스트의 스타일 변형을 지정합니다. (`h1`, `h2`, `body1`, `caption` 등)
- **component**: HTML 요소를 지정합니다. (`p`, `h1`, `span` 등)

### 2-3. AppBar

AppBar는 상단에 고정되는 앱 바를 만드는 컴포넌트입니다. 주로 네비게이션 바나 헤더로 사용됩니다.

#### 주요 AppBar 속성

- **position**: AppBar의 위치를 지정합니다. (`fixed`, `absolute`, `static` 등)
- **color**: AppBar의 색상을 지정합니다. (`default`, `primary`, `secondary` 등)

### 2-4. Drawer

Drawer는 측면에서 슬라이드하여 나타나는 네비게이션 패널을 만드는 컴포넌트입니다. 고정형, 임시형, 영구형 등 다양한 유형의 Drawer를 만들 수 있습니다.

#### 주요 Drawer 속성

- **variant**: Drawer의 유형을 지정합니다. (`permanent`, `persistent`, `temporary`)
- **anchor**: Drawer가 나타날 위치를 지정합니다. (`left`, `right`, `top`, `bottom`)

### 2-5. Button

Button은 클릭 가능한 버튼을 만드는 컴포넌트입니다. 다양한 스타일과 크기를 지원합니다.

#### 주요 Button 속성

- **variant**: 버튼의 스타일을 지정합니다. (`text`, `contained`, `outlined`)
- **color**: 버튼의 색상을 지정합니다. (`default`, `primary`, `secondary` 등)

### 2-6. Grid

Grid는 레이아웃을 구성하기 위한 그리드 시스템을 제공하는 컴포넌트입니다. 12열 시스템을 기반으로 하며, 반응형 레이아웃을 쉽게 구성할 수 있습니다.

#### 주요 Grid 속성

- **container**: 그리드 컨테이너를 생성합니다.
- **item**: 그리드 아이템을 생성합니다.
- **spacing**: 그리드 아이템 간의 간격을 지정합니다. (예: `0`, `1`, `2`, ..., `10`)
- **xs, sm, md, lg, xl**: 그리드 아이템이 각 브레이크포인트에서 차지하는 칸 수를 지정합니다.

기타 자세한 항목은 [Material-UI 공식 문서](https://mui.com/material-ui/all-components/)를 참조해주세요.

## 3. 미디어 쿼리 사용 방법

Material-UI의 `useMediaQuery` 훅을 사용합니다.<br />
그리고 브레이크포인트를 판별하기 위한 변수를 생성한 후, 해당 변수를 활용하여 **삼항 연산자**로 해상도를 판별합니다.

```javascript
import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Typography } from '@mui/material';

function ResponsiveComponent() {
  const theme = useTheme();
  const is1366 = useMediaQuery('(max-width:1366px)'); // breakpoint

  return (
    <Typography variant="h6" color={is1366 ? 'primary' : 'secondary'}>
      {is1366 ? 'This is a small screen' : 'This is not a small screen'}
    </Typography>
    // 브레이크포인트 ? 이하일 경우 : 초과일 경우
  );
}

export default ResponsiveComponent;
```

## 4. 스타일링 방법

### 4-1. `styled` 함수와 미디어 쿼리

Material-UI의 `styled` 함수는 CSS-in-JS 방식으로 컴포넌트를 스타일링할 수 있게 해줍니다. `styled` 함수를 사용하여 미디어 쿼리를 적용할 수 있습니다.

#### 예제

```javascript
import React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const ResponsiveButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'blue',
  [theme.breakpoints.down('sm')]: {
    backgroundColor: 'green',
  },
}));

function App() {
  return <ResponsiveButton>Responsive Button</ResponsiveButton>;
}

export default App;
```

위 예제에서는 화면 크기가 `sm` 이하일 때 버튼의 배경색이 파란색에서 초록색으로 변경됩니다.

### 4-2. `sx` Prop 사용

Material-UI의 `sx` prop을 사용하면 인라인 스타일로 미디어 쿼리를 적용할 수 있습니다. sx prop은 간단한 스타일링부터 복잡한 조건부 스타일링까지 유연하게 대응할 수 있습니다.

#### 예제

```javascript
import React from 'react';
import { Box } from '@mui/material';

function ResponsiveBox() {
  return (
    <Box
      sx={{
        width: 100,
        height: 100,
        backgroundColor: 'red',
        '@media (max-width:600px)': {
          backgroundColor: 'blue',
        },
      }}
    />
  );
}

export default ResponsiveBox;
```

위 예제에서는 화면 너비가 600px 이하일 때 박스의 배경색이 빨간색에서 파란색으로 변경됩니다.

## 결론

이 MD파일은 작업 전 참고만 해주시고,<br />
실제 작업에서는 MUI나 React 버전 차이가 있을 수 있음을 알리며 문서 마치겠습니다.
