namespace $.$$ {
	export class $hyoo_portal extends $.$hyoo_portal {
		
		pages() {

			const app = this.$.$mol_state_arg.value( 'app' )
			
			return [
				this.Menu(),
				... ( app === 'components' ) ?  this.Components_app().pages() : [],
				... ( app === 'articles' ) ?  this.Articles_app().pages() : [],
				... ( app === 'slides' ) ?  [ this.Slides_app() ] : [],
			]

		}

	}
}
