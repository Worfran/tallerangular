

export class Serie {
  Id: number;
  Name: string;
  Channel: string;
  Seasons: number;
  Description: string;
  Webpage: string;
  Poster: string;

  public constructor ( id: number, name: string, channel: string, seasons: number,
                        description: string, webpage: string, poster: string)
    {
      this.Id = id;
      this.Name = name;
      this.Channel = channel;
      this.Seasons = seasons;
      this.Description = description;
      this.Webpage = webpage;
      this.Poster = poster;
    }

}
