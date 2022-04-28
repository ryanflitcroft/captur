export default function handleUnsplashData(data) {
  return data.map((item) => ({
    id: item.data.id,
    width: item.data.width,
    height: item.data.height,
    color: item.data.color,
    blurHash: item.data.blur_hash,
    description: item.data.description,
    altDescription: item.data.alt_description,
    imageUrlReg: item.data.urls.regular,
    imageUrlSm: item.data.urls.small,
    imageLink: item.data.links.html,
    artistNameFirst: item.data.user.first_name,
    artistNameLast: item.data.user.last_name,
    artistLink: item.data.user.links.html,
    artistInstagram: item.data.user.instagram_username,
  }));
}
