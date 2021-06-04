package population

import (
	"github.com/brunoroque06/geneticalgorithm/individual"
)

type Population struct {
	individuals []*individual.Individual
}

func NewPopulation(individuals []*individual.Individual) *Population {
	return &Population{individuals}
}

func (population *Population) Rate(target []rune) (*RatedPopulation, error) {
	maxFitness := float32(0)
	fitnessSum := float32(0)
	bestGenes := []rune("")
	ratedIndividuals := make([]*individual.RatedIndividual, len(population.individuals))
	for i, ind := range population.individuals {
		fitness, err := ind.EstimateFitness(target)
		if err != nil {
			return nil, err
		}
		if fitness > maxFitness {
			maxFitness = fitness
			bestGenes = ind.Genes
		}
		fitnessSum += fitness
		ratedIndividuals[i] = &individual.RatedIndividual{Individual: ind, Fitness: fitness}
	}
	return &RatedPopulation{bestGenes, maxFitness, fitnessSum, ratedIndividuals}, nil
}
