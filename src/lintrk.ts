
export const lintrk = (action: string, options: any) => {
  (window as any)?.lintrk(action, options);
}

export const linkedInTrack = (conversionId: string | number) => {
  lintrk('track', { conversion_id: conversionId });
}
