// React stylesheet
export const styles = {
    mainSection: {
      backgroundColor: '#495E57', 
      display: 'grid', 
      gridTemplateColumns: '1fr 1fr', 
      padding: '50px'
    },
    title: {
      color: '#F4CE14', 
      fontWeight: 'bold', 
      fontSize: '48px', 
      marginBottom: '12px'
    },
    titleBlack: {
        color: '#000', 
        fontWeight: 'bold', 
        fontSize: '48px', 
        marginBottom: '12px'
      },
    subTitle: {
      color: 'white', 
      fontSize: '32px'
    },
    subTitleBlack: {
        color: '#000', 
        fontSize: '32px'
      },
    description: {
      color: 'white', 
      fontSize: '20px', 
      marginTop: '20px'
    },
    descriptionBlack: {
        color: '#000', 
        fontSize: '20px', 
        marginTop: '20px'
      },
    button: {
      marginTop: '30px', 
      borderRadius: '20px', 
      padding: '10px 20px', 
      backgroundColor: '#F4CE14', 
      fontWeight: 'bold', 
      border: 'none', 
      cursor: 'pointer'
    },
    imageContainer: {
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      overflow: 'hidden', 
      maxHeight: '400px'
    },
    image: {
      maxWidth: '100%', 
      height: 'auto', 
      borderRadius: '10px'
    },
    specialsSection: {
      backgroundColor: 'white', 
      display: 'grid', 
      gridTemplateColumns: '1fr 1fr 1fr', 
      padding: '50px', 
      gridGap: '20px'
    },
    specialsHeader: {
      gridColumn: '1 / -1', 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center'
    },
    specialsTitle: {
      fontWeight: 'bold', 
      fontSize: '36px'
    },
    specialsButton: {
      borderRadius: '20px', 
      padding: '10px 20px', 
      backgroundColor: '#495E57', 
      color: 'white', 
      border: 'none', 
      cursor: 'pointer'
    },
    navContainer: {
        display: 'grid', 
        gridTemplateColumns: 'repeat(6, auto)', 
        alignItems: 'center', 
        padding: '20px'
      },
      logoImage: {
        gridColumn: '1 / 2'
      },
      navBar: {
        gridColumn: '2 / 7'
      },
      navList: {
        display: 'flex', 
        justifyContent: 'space-around', 
        listStyle: 'none', 
        padding: 0
      },
      navItem: {
        fontWeight: 'bold'
      },
      navLink: {
        color: 'black', 
        textDecoration: 'none'
      }
  };