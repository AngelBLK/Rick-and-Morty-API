const resolveRoutes = (route) => {
  if(route.length <= 3) {
    let validRoude = route === '/' ? route : '/:id';
    return validRoude;
  }

  return `/${route}`;
}


export default resolveRoutes;