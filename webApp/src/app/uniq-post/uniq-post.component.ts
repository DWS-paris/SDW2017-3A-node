import { Component, OnInit } from '@angular/core';

// Importer les classes pour analyser les paramètres d'une route
import { ActivatedRoute, Params } from '@angular/router'

// Importer les services pour utiliser leurs méthodes
import { BlogPostsService } from '../services/blog-posts.service'

// Importer l'interface PostModel
import { PostModel } from '../data/post.model'


@Component({
  selector: 'app-uniq-post',
  templateUrl: './uniq-post.component.html'
})
export class UniqPostComponent implements OnInit {

  public uniqPost: PostModel
  public error: any
  public uniqPostId: number

  constructor(
    // Injecter la classe du service
    private myService: BlogPostsService,

    // Injecter la class ActivatedRoute
    private route: ActivatedRoute
  ) { }

  // Créer une fonction pour récupérer le paramètre id de la route
  private getRouteParam(){
    this.route.params.forEach( (params: Params) => {
      console.log(+params.id)

      // Appeler la fonction getUniqPost en y indiquant l'id
      this.getUniqPost(+params.id)
      this.uniqPostId = +params.id
    })
  }

  // Créer une fonction pour récupérer le contenu d'un post
  private getUniqPost(id: number){
    this.myService.getUniqPost(id).then(
      data => this.uniqPost = data[0],
      error => this.error = error
    )
  }

  ngOnInit() {
    this.getRouteParam()
  }

}
