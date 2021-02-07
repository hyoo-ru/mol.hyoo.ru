namespace $.$$ {
	export class $hyoo_mol extends $.$hyoo_mol {
		
		pages() {

			const section = this.$.$mol_state_arg.value( 'section' )
			
			return [
				this.Menu(),
				... ( section === 'main' ) ?  [ this.Main() ] : [],
				... ( section === 'components' ) ?  this.Components_app().pages() : [],
				... ( section === 'view.tree' ) ?  this.View_tree_app().pages() : [],
				... ( section === 'articles' ) ?  this.Articles_app().pages() : [],
				... ( section === 'apps' ) ?  this.Apps_app().pages() : [],
				... ( section === 'icons' ) ?  [ this.Icons_app() ] : [],
				... ( section === 'slides' ) ?  [ this.Slides_app() ] : [],
			]

		}

		@ $mol_mem
		description() {
			return $mol_file.relative( 'mol/readme.md' ).text() as string
		}
		
	}
}
